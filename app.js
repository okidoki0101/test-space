const source = new URL('https://ultra-white-cube.oimizi-kr.chatgpt.site/');
const query = new URLSearchParams(window.location.search);
const savedSpace = query.get('space');
if (savedSpace) {
  source.searchParams.set('space', savedSpace);
} else {
  source.searchParams.set('room', query.get('room') || '0a9dd060-d76a-4a6b-88fc-a4579b31a9b1');
}
source.searchParams.set('world', query.get('world') === 'library' ? 'library' : 'cube');

const frame = document.getElementById('space');
frame.addEventListener('load', () => {
  document.getElementById('loading').hidden = true;
});
frame.src = source.href;
