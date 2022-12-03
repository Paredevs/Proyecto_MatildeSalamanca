import routes from "./routes";


export default function logout() {
    localStorage.clear();
    window.location.href = routes.home;
}

