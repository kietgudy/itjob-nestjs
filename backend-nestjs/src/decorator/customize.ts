import { SetMetadata } from '@nestjs/common';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const RESPONSE_MESSAGE='response_message'
export const ResponseMessage = (message: string) =>
      SetMetadata(RESPONSE_MESSAGE, message);

export const User = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
      const request = ctx.switchToHttp().getRequest();
      return request.user;
    },
  );

  export const IS_PUBLIC_PERMISSION = "isPublicPermission";
  export const SkipCheckPermission = () => SetMetadata(IS_PUBLIC_PERMISSION, true)