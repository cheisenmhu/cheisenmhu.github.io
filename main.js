
var w = window.innerWidth;
var h = window.innerHeight;

const secondPage = document.createElement('iframe');
secondPage.src = "https://cheisenmhu-secondpagepoc.hf.space";
secondPage.setAttribute('frameborder', '0');
secondPage.setAttribute('width', w + 'px');
secondPage.setAttribute('height', h + 'px');

document.getElementById('root').appendChild(secondPage);
