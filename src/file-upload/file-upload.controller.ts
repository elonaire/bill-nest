import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';
import { AppService } from 'src/app.service';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly appService: AppService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './uploads',
      //   storage: diskStorage({
      //     destination: (req, file, cb) => {
      //       console.log(file);
      //       console.log(req);

      //       cb(null, './uploads');
      //     },
      //   }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return this.appService.handleFileUpload(file);
  }
}
