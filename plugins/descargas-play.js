import yts from 'yt-search'
import ytdl from 'ytdl-core'
import fetch from 'node-fetch'
import axios from 'axios'
const handler = async (m, { conn, command, args, text, usedPrefix }) => {

if (command == 'play' || command == 'mp3') {
if (!text) return conn.reply(m.chat, `✦ *Ingrese el nombre de un video de YouTube*`,  m, ); 
await m.react(rwait);
const yt_play = await search(args.join(' '));
const ytplay2 = await yts(text);
const texto1 = `✦ *Título* 
» ${yt_play[0].title}

✦ *Publicado* 
» ${yt_play[0].ago}

✦ *Duración* 
» ${secondString(yt_play[0].duration.seconds)}`.trim();

await conn.sendFile(m.chat, yt_play[0].thumbnail, 'error.jpg', texto1, m, null);
try {
let response = await fetch(`https://api-rin-tohsaka.vercel.app/download/ytmp3?url=${yt_play[0].url}`)
await conn.sendMessage(m.chat, { audio: response, mimetype: 'audio/mpeg' }, { quoted: m })    
await m.react(done)
} catch (e) {    
await m.react(error);
console.log(e);
}}

if (command == 'play2' || command == 'mp4') {
if (!text) return conn.reply(m.chat, `✦ *Ingrese el nombre de un video de YouTube*`,  m, );
await m.react(rwait);
const yt_play = await search(args.join(' '));
const ytplay2 = await yts(text);
const texto1 = `✦ *Título* 
» ${yt_play[0].title}

✦ *Publicado* 
» ${yt_play[0].ago}

✦ *Duración* 
» ${secondString(yt_play[0].duration.seconds)}`.trim();

await conn.sendFile(m.chat, yt_play[0].thumbnail, 'error.jpg', texto1, m, null);
try {
let response = await fetch(`https://api-rin-tohsaka.vercel.app/download/ytmp4?url=${yt_play[0].url}`)
await conn.sendMessage(m.chat, { video: response, mimetype: 'video/mp4' }, { quoted: m })    
await m.react(done)
}} catch (e) {    
await m.react(error);
console.log(e);
}}

if (command == 'play3' || command == 'playdoc') {
if (!text) return conn.reply(m.chat, `✦ *Ingrese el nombre de un video de YouTube*`,  m, );
await m.react(rwait);
const yt_play = await search(args.join(' '));
const ytplay2 = await yts(text);
const texto1 = `✦ *Título* 
» ${yt_play[0].title}

✦ *Publicado* 
»${yt_play[0].ago}

✦ *Duración* 
» ${secondString(yt_play[0].duration.seconds)}`.trim();

await conn.sendFile(m.chat, yt_play[0].thumbnail, 'error.jpg', texto1, m, null);
try {
let response = await fetch(`https://api-rin-tohsaka.vercel.app/download/ytmp3?url=${yt_play[0].url}`)  
await conn.sendMessage(m.chat, { document: response, mimetype: 'audio/mpeg', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
await m.react(done)
} catch (e) {    
await m.react(error);
console.log(e);
}}

if (command == 'play4' || command == 'playdoc2') {
if (!text) return conn.reply(m.chat, `✦ *Ingrese el nombre de un video de YouTube*`,  m, );
await m.react(rwait);
conn.reply(m.chat, global.wait, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}});
const yt_play = await search(args.join(' '));
const ytplay2 = await yts(text);
const texto1 = `✦ *Título* :
» ${yt_play[0].title}

✦ *Publicado* 
» ${yt_play[0].ago}

✦ *Duración* 
» ${secondString(yt_play[0].duration.seconds)}`.trim();

await conn.sendFile(m.chat, yt_play[0].thumbnail, 'error.jpg', texto1, m, null);
try {
let response = await fetch(`https://api-rin-tohsaka.vercel.app/download/ytmp3?url=${yt_play[0].url}`)  
await conn.sendMessage(m.chat, { document: response, mimetype: 'video/mp4', fileName: `${yt_play[0].title}.mp4` }, { quoted: m });
await m.react(done)
} catch (e2) {    
await m.react(error);
console.log(e2);
}}

}
handler.help = ['play', 'play2', 'play3', 'play4', 'playdoc'];
handler.tags = ['descargas'];
handler.command = ['play', 'play2', 'play3', 'play4', 'mp3', 'mp4', 'playdoc', 'playdoc2']
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
  }

const getBuffer = async (url) => {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    return Buffer.from(buffer);
  } catch (error) {
    console.error("Error al obtener el buffer", error);
    throw new Error("Error al obtener el buffer");
  }
}

async function getFileSize(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        const contentLength = response.headers.get('content-length');
        return contentLength ? parseInt(contentLength, 10) : 0;
    } catch (error) {
        console.error("Error al obtener el tamaño del archivo", error);
        return 0;
    }
}

async function fetchY2mate(url) {
  const baseUrl = 'https://www.y2mate.com/mates/en60';
  const videoInfo = await fetch(`${baseUrl}/analyze/ajax`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ url, q_auto: 0 })
  }).then(res => res.json());

  const id = videoInfo.result.id;
  const downloadInfo = await fetch(`${baseUrl}/convert`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ type: 'youtube', _id: id, v_id: url, token: '', ftype: 'mp4', fquality: '360p' })
  }).then(res => res.json());

  return downloadInfo.result.url;
}

async function fetchInvidious(url) {
  const apiUrl = `https://invidious.io/api/v1/get_video_info`;

const response = await fetch(`${apiUrl}?url=${encodeURIComponent(url)}`);
const data = await response.json();

if (data && data.video) {
const videoInfo = data.video;
return videoInfo; 
} else {
throw new Error("No se pudo obtener información del video desde Invidious");
  }
}

async function fetch9Convert(url) {
const apiUrl = `https://9convert.com/en429/api`;
const response = await fetch(`${apiUrl}?url=${encodeURIComponent(url)}`);
const data = await response.json();

if (data.status === 'ok') {
    return data.result.mp3;
  } else {
    throw new Error("No se pudo obtener la descarga desde 9Convert");
  }
}
