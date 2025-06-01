'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

export type DockProps = VariantProps<typeof dockVariants> & {
  className?: string;
  magnification?: number;
  distance?: number;
  children: React.ReactNode;
};

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  'mx-auto w-max h-full p-2 flex items-end rounded-full border',
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      ...props
    },
    ref,
  ) => {
    const mousex = useMotionValue(Infinity);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Check if it's a touch device
      const checkIsMobile = () => {
        const hasTouch =
          'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
        setIsMobile(hasTouch || isSmallScreen);
      };

      checkIsMobile();

      // Listen for resize events
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      const handleResize = () => checkIsMobile();

      mediaQuery.addEventListener('change', handleResize);
      window.addEventListener('resize', handleResize);

      return () => {
        mediaQuery.removeEventListener('change', handleResize);
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            mousex: isMobile ? mousex : mousex,
            magnification: isMobile ? 40 : magnification,
            distance: isMobile ? 0 : distance,
            isMobile,
          } as DockIconProps);
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={isMobile ? undefined : (e) => mousex.set(e.pageX)}
        onMouseLeave={isMobile ? undefined : () => mousex.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }))}
      >
        {renderChildren()}
      </motion.div>
    );
  },
);

Dock.displayName = 'Dock';

export type DockIconProps = {
  size?: number;
  magnification?: number;
  distance?: number;
  mousex?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
  isMobile?: boolean;
};

const DockIcon = ({
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mousex,
  className,
  children,
  isMobile = false,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const distanceCalc = useTransform(mousex, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40],
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  // For mobile, use a fixed width without animation
  const mobileWidth = useMotionValue(40);

  return (
    <motion.div
      ref={ref}
      style={{ width: isMobile ? mobileWidth : width }}
      className={cn(
        'flex aspect-square cursor-pointer items-center justify-center rounded-full',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = 'DockIcon';

export { Dock, DockIcon, dockVariants };
