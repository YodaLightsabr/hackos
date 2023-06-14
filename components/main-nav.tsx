"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Icons } from "@/components/icons"
import { useTheme } from "next-themes"

const features: { title: string; href: string; description: string }[] = [
  {
    title: "Register",
    href: "/features/register",
    description:
      "The ultimate customizable registration form built for simplicity",
  },
  {
    title: "Check-In",
    href: "/features/check-in",
    description:
      "Manage event access and attendance with a simple QR code",
  },
  {
    title: "Broadcast",
    href: "/features/broadcast",
    description:
      "Send messages to attendees, volunteers, and parents in real-time",
  },
  {
    title: "Schedule",
    href: "/features/schedule",
    description: "Plan out your event and keep attendees in the loop",
  },
  {
    title: "Ship",
    href: "/features/ship",
    description:
      "Gather project submissions and manage judging with ease",
  },
  {
    title: "Integrate",
    href: "/features/integrate",
    description:
      "Integrate Hack OS into a custom attendee experience",
  },
]

export function MainNav() {
  const { setTheme, theme } = useTheme()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Hack OS
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      A complete platform designed to make your hackathon a success.
                    </p>
                    <img src={theme == 'dark' ? '/logo-dark.svg' : 'logo.svg'} alt="</>" className="h-24 w-24" />
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Attendees">
                Frictionless attendee management tools.
              </ListItem>
              <ListItem href="/docs/installation" title="Operations">
                Features designed to make your hackathon run smoothly.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Experience">
                A great experience for attendees and organizers alike.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {features.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
