// mock-data/mock-chat.ts
import { Chat } from '../types/data';

export const initialChat: Chat = {
  id: 1,
  user: 'Grupo El Surco',
  orderDetails: 'Orden para maquinaria agrícola',
  messages: [
    {
      sender: 'Sistema',
      text: `Mensaje Automático del Sistema\nConfirmación de Orden N.º 12345\nEstimado [Marc Perez],\nGracias por su compra. Su orden de maquinaria agrícola ha sido procesada y actualmente está siendo preparada para el envío.\nLe notificaremos cuando su pedido esté en camino.\nSaludos,\nEl Surco`,
      timestamp: '10:30 AM',
    },
    {
      sender: 'Sistema',
      text: `Estimado Marc,\nEspero que se encuentre bien. Solo quería confirmarle que su pedido de maquinaria agrícola sigue en proceso de preparación y debería estar listo para el envío en los próximos días. Estamos aquí para cualquier consulta que pueda tener o si necesita más detalles sobre el estado de su orden. Gracias por confiar en nosotros.\nSaludos,\nVictor Santana\nEl Surco`,
      timestamp: '10:32 AM',
    },
    {
      sender: 'Marc Perez',
      text: 'Gracias por la actualización. ¿Podría indicarme aproximadamente cuándo creen que llegará la maquinaria? Estoy planificando el trabajo en el campo y sería útil tener una fecha estimada.',
      timestamp: '10:35 AM',
    },
  ],
  unread: false,
};
