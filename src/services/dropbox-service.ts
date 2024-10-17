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
    const response = await dbx.filesListFolder({ path });
    let allFiles = [...response.result.entries];

    if (recursive) {
      const subfolders = allFiles.filter((entry) => entry['.tag'] === 'folder');
      for (const folder of subfolders) {
        const subfolderFiles = await listFolderFiles(
          folder.path_lower || '',
          true,
        );
        allFiles = [...allFiles, ...subfolderFiles];
      }
    }

    // Generar los tempLinks para todos los archivos, pero verificando que el `path_lower` no sea undefined
    const filesWithLinks = await Promise.all(
      allFiles.map(async (file) => {
        if (file['.tag'] === 'file' && file.path_lower) {
          // Asegúrate de que file.path_lower no sea undefined
          try {
            const tempLinkResponse = await dbx.filesGetTemporaryLink({
              path: file.path_lower,
            });
            return { ...file, link: tempLinkResponse.result.link }; // Cambiamos a 'link' en lugar de 'tempLink'
          } catch (error) {
            console.error('Error al obtener el enlace temporal:', error);
            return { ...file, link: null }; // Si hay error, devolver sin enlace
          }
        }
        return file; // Si es una carpeta, no necesitamos link
      }),
    );

    return filesWithLinks;
  } catch (error) {
    console.error('Error al listar archivos de Dropbox:', error);
    throw error;
  }
};
