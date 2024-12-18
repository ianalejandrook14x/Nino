import fs from 'fs';
import personajes from './personajes.json'; 

const handler = async (m, { text }) => {
  const args = text.split(' ');
  const id = args[0];
  const tag = args[1];

  if (!id || !tag) {
    return m.reply('*Proporciona la ID y el Tag*');
  }

  const anime = personajes.find(anime => anime.id === id);

  if (!anime) {
    return m.reply('*No se encontró el anime con esa ID.*');
  }

  const personajeIndex = anime.personajes.findIndex(p => p.tag === tag);

  if (personajeIndex === -1) {
    return m.reply('*No se encontró el personaje con ese tag.*');
  }

  anime.personajes.splice(personajeIndex, 1);

  fs.writeFileSync('./personajes.json', JSON.stringify(personajes, null, 2));

  return m.reply('*Se eliminó el personaje*');
};

handler.help = ['delete <id> <tag>']; 
handler.command = ['delete <id> <tag>']; 
handler.mods = true;

export default handler;
