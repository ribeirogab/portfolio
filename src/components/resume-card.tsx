'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Link2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type ResumeCardProps = {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: React.ReactNode;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
};

const LinkContainer = ({
  href,
  children,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href} className="block cursor-pointer">
      {children}
    </Link>
  );
};

const ContainerComponent = ({ children }: { children: React.ReactNode }) => {
  return <div className="block cursor-pointer">{children}</div>;
};

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  links,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const Icon = href ? Link2 : ChevronDown;
  const Container = href ? LinkContainer : ContainerComponent;

  const handleClick = () => {
    if (description) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Container href={href || '#'}>
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="bg-muted-background m-auto size-12 border dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="group ml-4 flex-grow flex-col items-center">
          <CardHeader onClick={handleClick}>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center text-xs font-semibold leading-none sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}

                <Icon
                  className={cn(
                    'ml-1 size-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
                    isExpanded ? 'rotate-180' : 'rotate-0',
                  )}
                />
              </h3>
              <div className="text-right text-xs tabular-nums text-muted-foreground sm:text-sm">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>

          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? 'auto' : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm"
            >
              {description}

              {links && links.length > 0 && (
                <div className="mt-2 flex flex-row flex-wrap items-start gap-1">
                  {links?.map((link, idx) => (
                    <Link href={link?.href} key={idx} target="_blank">
                      <Badge
                        key={idx}
                        variant="outline"
                        className="flex gap-2 px-2 py-1 text-[10px]"
                      >
                        {link.icon}
                        {link.type}
                      </Badge>
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </Card>
    </Container>
  );
};
