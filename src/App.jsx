import { Button, Carousel, Navbar } from "flowbite-react";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline mb-4">Hello world!</h1>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <Button.Group className="mb-8">
        <Button color="gray">Profile</Button>
        <Button color="gray">Settings</Button>
        <Button color="gray">Messages</Button>
      </Button.Group>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000}>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="carousel image 1"
            className="object-cover w-full h-full"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="carousel image 2"
            className="object-cover w-full h-full"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="carousel image 3"
            className="object-cover w-full h-full"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="carousel image 4"
            className="object-cover w-full h-full"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="carousel image 5"
            className="object-cover w-full h-full"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default App;
