import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
  Res,
} from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { AppService } from 'src/app.service';

@Controller('files')
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

  @Post('upload-bulk')
  @UseInterceptors(AnyFilesInterceptor())
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);

    return this.appService.handleBulkUpload(files);
  }

  @Get(':uuid')
  async serveFile(
    @Param('uuid') uuid: string,
    @Res() res: Response,
  ): Promise<void> {
    return this.appService.getFile(uuid, res);
  }
}
