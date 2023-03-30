import { AudioContext } from 'web-audio-api';
import { pipeline } from '@xenova/transformers';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IAService {
  private static classifier: any;

  static async getClassifier() {
    global.AudioContext = AudioContext;
    if (this.classifier) return this.classifier;
    this.classifier = await pipeline('automatic-speech-recognition');
    return this.classifier;
    //   'automatic-speech-recognition',
  }
}
