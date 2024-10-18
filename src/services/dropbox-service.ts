/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dropbox } from 'dropbox';

export const listFolderFiles = async (
  path: string,
  recursive: boolean = false,
): Promise<any[]> => {
  const dbx = new Dropbox({
    accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN,
  });

  try {
    let hasMore = true;
    let cursor = '';
    let allFiles: any[] = [];

    // Hacer la primera llamada a la API de Dropbox para listar la carpeta
    const response = await dbx.filesListFolder({ path });
    allFiles = [...response.result.entries];
    cursor = response.result.cursor;
    hasMore = response.result.has_more;

    // Manejar la paginación si hay más archivos
    while (hasMore) {
      const continueResponse = await dbx.filesListFolderContinue({ cursor });
      allFiles = [...allFiles, ...continueResponse.result.entries];
      cursor = continueResponse.result.cursor;
      hasMore = continueResponse.result.has_more;
    }

    // Procesar subcarpetas de forma recursiva (en paralelo) si es necesario
    if (recursive) {
      const subfolders = allFiles.filter((entry) => entry['.tag'] === 'folder');
      const subfolderPromises = subfolders.map((folder) =>
        listFolderFiles(folder.path_lower || '', true),
      );
      const subfolderFiles = await Promise.all(subfolderPromises);
      subfolderFiles.forEach((files) => {
        allFiles = [...allFiles, ...files];
      });
    }

    return allFiles; // No solicitamos el temporary_link aún
  } catch (error) {
    console.error('Error al listar archivos de Dropbox:', error);
    throw error;
  }
};

// Nueva función para obtener el enlace temporal cuando sea necesario
export const getTemporaryLink = async (
  path: string,
): Promise<string | null> => {
  const dbx = new Dropbox({
    accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN,
  });

  try {
    const response = await dbx.filesGetTemporaryLink({ path });
    return response.result.link;
  } catch (error) {
    console.error('Error al obtener el enlace temporal:', error);
    return null;
  }
};
