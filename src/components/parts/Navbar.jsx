import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
} from "@nextui-org/react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { text: "Inicio", link: "https://nosotros.tostao.com/" },
    { text: "Menu", link: "https://nosotros.tostao.com/category/al-dia/" },
    { text: "Novedades",link: "https://nosotros.tostao.com/procesos-de-produccion/",},
    { text: "Contacto", link: "https://nosotros.tostao.com/pqrs/" },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="bg-yellow-tostao">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image src="../../../public/logo.png" width={100} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Image src="../../../public/logo.png" width={100} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center">
        {menuItems.map((item, index) => {
          return (
            <NavbarItem key={`${item}-${index}`} className="hidden sm:flex duration-300 ease-in">
              <Link href={item.link} target="_blank" className="font-bold text-black cursor-pointer duration-300 ease-in hover:border-b-3 hover:border-yellow-500 hover:text-yellow-500 ">
                {item.text}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link href={item.link} target="_blank" className="w-full" color="foreground" size="lg">
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
