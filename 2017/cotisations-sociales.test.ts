import CotisationsSociales from "./cotisations-sociales";

describe('CotisationsSociales', () => {
  describe('getCotisations', () => {

    it('should be some when no revenu', () => {
      const cotisationsSociales = new CotisationsSociales();
      expect(cotisationsSociales.getCotisations()).toBeCloseTo(2238.91, 2);
    });

    it('should be more when some revenu', () => {
      const cotisationsSociales = new CotisationsSociales();
      cotisationsSociales.remuneration = 20000;
      expect(cotisationsSociales.getCotisations()).toBeCloseTo(7405.07, 2);
    });

  });
});
