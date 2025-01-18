import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// can be called as <NavButton href="/whatever" label="Whatever" icon={ImportedIcon} />
type Props = {
    icon: LucideIcon;
    label: string;
    href?: string;
};

export function NavButton({
    icon: Icon,
    label,
    href,
}: Props) {
    return (
        <Button
            variant="default"
            size="lg"
            aria-label={label}
            title={label}
            className="rounded-full"
            asChild
        >
            {href ? (
                <Link href={href}>
                    <Icon />
                </Link>
            ) : (
                <Icon />
            )}
        </Button>
    );
}
