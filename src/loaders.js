// BASE URL OF OUR DEPLOYED API
const URL = "http://localhost:4000"


// const URL = "https://dolores-crazover-swe-portfolio-satk.onrender.com"

export const projectsLoader = async () => {
    const response = await fetch(URL + "/projects")
    const projects = await response.json()
    return projects
}

export const aboutLoader = async () => {
    const response = await fetch(URL + "/about")
    const about = await response.json()
    return about
}