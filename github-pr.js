const meta = document.getElementsByClassName('gh-header-meta')[0]
const sourceBranch = meta.getElementsByTagName('a')[2]

const gitpod = document.createElement('a')
gitpod.href='https://gitpod.io/#' + sourceBranch.href
gitpod.innerText='Open with GitPod'
gitpod.innerHTML='<img height="28px" src="https://gitpod.io/favicon256.png"/>'
gitpod.target='_blank'
meta.append(gitpod)
