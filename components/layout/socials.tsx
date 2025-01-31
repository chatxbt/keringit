import { cn } from "@/lib/utils";
import { socialLinks } from "./navlinks";

export const Socials = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      {socialLinks.map(({ href, icon: Icon }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-links"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
};
