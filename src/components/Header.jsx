import { Button, Navbar } from "flowbite-react";

export function Header() {
  return (
    <header className="w-100 h-auto sticky top-0 z-50">
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="/public/vite.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            EVAC
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button href="/solicitarTurno">Solicitar turno</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Inicio
          </Navbar.Link>
          <Navbar.Link href="/servicios">Servicios</Navbar.Link>
          <Navbar.Link href="/nosotros">Nosotros</Navbar.Link>
          <Navbar.Link href="/contacto">Contacto</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
