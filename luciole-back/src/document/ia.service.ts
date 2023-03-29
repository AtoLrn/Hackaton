import { Injectable } from '@nestjs/common';
import { pipeline } from '@xenova/transformers';

@Injectable()
export class IAService {
  private static classifier: any;

  static async getClassifier() {
    if (this.classifier) return this.classifier;
    this.classifier = await pipeline('question-answering');
    return this.classifier;
    //   'bvanaken/clinical-assertion-negation-bert',
  }
}
