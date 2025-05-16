class CurrencyUtils {
  static formatToTHB(amount: number) {
    return new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
    }).format(amount);
  }
}

export default CurrencyUtils;
