import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common/decorators';
import { plainToClass } from 'class-transformer';
import { ClassConstructor } from 'class-transformer/types/interfaces';
import { map, Observable } from 'rxjs';

export function Serialize(DTO: ClassConstructor<unknown>) {
  return UseInterceptors(new SerializeInterceptor(DTO));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private DTO: ClassConstructor<unknown>) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      map((data) => {
        return plainToClass(this.DTO, data, { excludeExtraneousValues: true });
      }),
    );
  }
}
