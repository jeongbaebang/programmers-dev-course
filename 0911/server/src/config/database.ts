import mongoose from 'mongoose';

// DB 연결을 추상화
interface IDatabase {
  connect(): Promise<void>;
}

// Mongoose DB 연결 클래스
export class MongooseDatabase implements IDatabase {
  private getValidatedURL(): string {
    const DB_URI = process.env.DATA_BASE;

    if (typeof DB_URI !== 'string' || DB_URI.length <= 0) {
      throw new Error('Invalid DB URI');
    }

    return DB_URI;
  }

  async connect(): Promise<void> {
    try {
      const mongooseInstance = await mongoose.connect(this.getValidatedURL());

      if (!mongooseInstance) {
        throw new Error('Could not connect');
      }
    } catch (error) {
      const errorInstance =
        error instanceof Error
          ? error.message
          : new Error('Internal server Error').message;

      throw new Error(`DB connection failed: ${errorInstance}`);
    }
  }
}

// 로깅을 책임지는 클래스
class Logger {
  static log(message: string): void {
    console.log(message);
  }

  static error(error: unknown): void {
    console.error(error);
  }
}

// 데이터베이스 연결 함수
export const connectDB = async (db: IDatabase) => {
  try {
    await db.connect();
    Logger.log('Database connection successful');
  } catch (error) {
    Logger.error(error);
  }
};
