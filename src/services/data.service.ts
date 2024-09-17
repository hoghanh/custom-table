import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private names = ["Widget", "Gadget", "Tool", "Device", "Apparel", "Accessory", "Component", "Part", "Material", "Product"];
  private stockCodes = ["WGT001", "GDT002", "TL003", "DV004", "APL005", "ACC006", "CMP007", "PRT008", "MAT009", "PRD010"];

  constructor() { }

  generateRandomNumber(min: number, max: number): number {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  }

  generateDummyData(numRecords: number): any[] {
    const data = [];
    for (let i = 0; i < numRecords; i++) {
      const name = this.names[Math.floor(Math.random() * this.names.length)];
      const stockCode = `${this.stockCodes[Math.floor(Math.random() * this.stockCodes.length)]}${(i + 1).toString().padStart(3, '0')}`;
      const unitPrice = this.generateRandomNumber(10, 500);
      const quantity = Math.floor(Math.random() * 100) + 1;
      data.push({ name, stockCode, unitPrice, quantity });
    }
    return data;
  }
}
