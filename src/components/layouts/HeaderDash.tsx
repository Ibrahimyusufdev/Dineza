import { Link } from "react-router-dom";
// ui components from shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { assets } from "@/assets/asset";
import { useAuthStore } from "@/features/auth";
import { getInitials } from "@/helpers/getInitials";

const HeaderDash = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <section className="border-b border-[#DFDFDF] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16">
          {/* Logo */}
          <Link to={`/${user.role}`} className="flex items-center gap-2">
            <div className="bg-sidebar-secondary text-sidebar-primary-foreground flex aspect-square size-13 items-center justify-center rounded-lg">
              <img src={assets.logo} alt="Dineza logo" className="h-full w-full object-contain" />
            </div>

            {/* Hide text on mobile */}
            <span className="hidden leading-none font-semibold sm:inline sm:text-2xl">Dineza</span>
          </Link>

          {/* Avatar */}
          <Avatar className="aspect-square size-11">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="rounded-lg text-xs sm:text-sm">
              {getInitials(user.name)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default HeaderDash;
