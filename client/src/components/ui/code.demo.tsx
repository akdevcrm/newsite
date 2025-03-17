function Component() {
      return (
        <div className="flex items-center justify-center rounded-full border border-border bg-background p-1 shadow shadow-black/5">
          <div className="flex -space-x-1.5">
            <img
              className="rounded-full ring-1 ring-background"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&fit=crop"
              width={20}
              height={20}
              alt="Avatar 01"
            />
            <img
              className="rounded-full ring-1 ring-background"
              src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?q=80&w=100&h=100&fit=crop"
              width={20}
              height={20}
              alt="Avatar 02"
            />
            <img
              className="rounded-full ring-1 ring-background"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&fit=crop"
              width={20}
              height={20}
              alt="Avatar 03"
            />
            <img
              className="rounded-full ring-1 ring-background"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&h=100&fit=crop"
              width={20}
              height={20}
              alt="Avatar 04"
            />
          </div>
          <p className="px-2 text-xs text-muted-foreground">
            Trusted by <strong className="font-medium text-foreground">100+</strong> travel agents.
          </p>
        </div>
      );
    }

    export { Component };
