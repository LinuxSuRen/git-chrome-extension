const meta = document.getElementsByClassName('file-navigation')[0]

const gitpod = document.createElement('a')
gitpod.href='https://gitpod.io/#' + window.location.href
gitpod.innerHTML='<img src="https://gitpod.io/static/media/gitpod.2cdd910d.svg"/>'
gitpod.target='_blank'
meta.append(gitpod)
