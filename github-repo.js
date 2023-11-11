const meta = document.getElementsByClassName('pagehead-actions')[0]

const gitpod = document.createElement('a')
gitpod.href='https://gitpod.io/#' + window.location.href
gitpod.innerHTML='<img height="28px" src="https://gitpod.io/favicon256.png"/>'
gitpod.target='_blank'
meta.append(gitpod)
