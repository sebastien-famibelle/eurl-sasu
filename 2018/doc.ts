export const doc = {
  readme: {
    title: "En résumé",
    content: ``
  },
  revenu: {
    title: "Revenu",
    content: ``
  },
  exonerationsZFU: {
    title: 'Exonerations liées à l\'implantation en ZFU',
    content: `Lorsque votre entreprise en installée en Zone Franche Urbaine, celle-ci est *exonérée* d'impôt sur les sociétés durant les 5 premières années.
      **Attention** : pour un freelance (activité non sédentaire), celui-ci doit également réaliser son CA en ZFU. Les exonérations seront calculées sur la proportion de CA réalisé en ZFU (au minimum 25%).`
  },
  resteSociete: {
    title: "Reste en société",
    content: `Ce qu'il reste dans votre société après votre exercice fiscal.`
  },
  distribuable: {
    title: "Dividendes distribuables",
    content: `
Une fois que toutes les "dépenses" ont été effectuées au sein de l'entreprise, il reste un bénéfice net.  
Les dépenses sont les charges, les rémunérations et l'impôt sur les sociétés.  

Le bénéfice net peut être intégralement ou partiellement redistribué sous forme de dividendes aux actionnaires. Comme nous sommes dans le cadre d'une EURL ou une SASU, il n'y a qu'un seul actionnaire. C'est donc vous qui empochez les dividendes.  

En 2017, si vous êtes en EURL, les dividendes sont taxés à peu près de la même façon que les rémunérations. Ils n'ont donc pas d'intérêt.  
En revanche, si vous êtes en SASU, les dividendes sont nettement moins taxés. Mais ils passent après l'impôt sur les sociétés. Il faut donc équilibrer au mieux la répartition entre salaire du président et dividendes distribués à l'associé unique. **L'autre point important est que les dividendes ne vous offrent aucune protection sociale**.  

De manière générale, l'idée de se rémunérer sur les dividendes signifie que vous avez des économies pour vous permettre de vivre sans revenus issus de votre entreprise pendant un certain temps. A l'issue de votre exercice fiscal vous empochez les dividendes, tout en étant capable de verser 21% d'acompte pour l'impôt sur le revenu (voir la section sur l'impôt sur le revenu). Bref, cela implique une bonne gestion de vos finances personnelle à moyen terme (un à deux ans).`
  },
  cotisationsRemu: {
    title: "Cotisations sociales sur rémunération",
    content: `Montant des cotisations sociales à appliquer sur la rémunération nette.
* Pour les EURL (CIPAV) : Cotisations sociales listées par la CIPAV [Source](https://www.lacipav.fr/sites/default/files/2018-08/GuideCipav2018_V19-BD-WEB-Pages_0.pdf)
* Pour les SASU (régime général) : ~ 81.85% de la rémunération nette (28% de charges salariales + 54% de charges patronales) [Source](https://www.expert-comptable-tpe.fr/articles/charges-sociales-montant-salaire/)`
  },
  remunerationBrute: {
    title: "Rémunération brute",
    content: `Représente le coût total de la rémunération.
    \`Rémunération brute = Rémunération nette + cotisations sociales\``
  },
  remunerationNette: {
    title: "Rémunération nette",
    content: `Représente le salaire net perçu par le freelance.
    \`Rémunération nette = Rémunération brute - cotisations sociales\``
  },
  assietteDividendesIR: {
    title: "Assiette IR des dividendes",
    content: `
Un des gros avantages des dividendes est qu'ils sont taxés à l'IR sur 60% de leur valeur, et on peut aussi déduire la CSG de l'assiette (5,1%).  
Exemple donné par [www.service-public.fr](https://www.service-public.fr/professionnels-entreprises/vosdroits/F32963) :  
*Par exemple, un actionnaire ou associé qui perçoit 1 000 € de dividendes doit acquitter 15,5 % de prélèvements sociaux, soit 155 €, déductibles à hauteur de 5,1 %, soit 51 €. Le montant imposable des revenus distribués, soumis au barème progressif de l'impôt sur le revenu, est égal à 600 € (1 000 - 1 000 x 40 %) - 51 € (CSG déductible) = 549 €.*  

Par ailleurs, au moment où les dividendes sont distribués, il y a un acompte de 21% qui est prélevé à la source. Il faudra donc l'indiquer sur sa feuille d'impôt pour qu'il soit déduit.`
  },
  impotSocietes: {
    title: "Impôt sur les sociétés",
    content: `15% pour la partie des bénéfices en dessous de 38 120 €, 28% entre 38 120 et 500 000, et 33 % au-delà.`
  },
  assietteIS: {
    title: "Assiette impôt société",
    content: `Représente les bénéfices avant impôts sur les bénéfices.
      \`Assiette IS = C.A - charges - rémunération brute\``
  },
  revenuBrut: {
    title: "Revenu brut",
    content: `Le revenu brut correspond à l'argent à destination personnelle avant tous les prélèvements.
        Par exemple : 100K de CA, 10K de charges, 20K d'ARE et on laisse 5K en société à la fin de l'exercice : 
        \`100 - 10 + 20 - 5 = 105K\` de revenu brut perso.`
  },
  revenuNet: {
    title: "Revenu net",
    content: `On parle en réalité de "super-net" : tous les prélèvements sont passés sur le brut, y compris l'impôt sur le revenu. Ce qui reste est donc vraiment ce qui va dans la poche du freelance.`
  },
  dividendesCotisations: {
    title: "Cotisations sociales sur dividendes",
    content: `* Si Flat-Tax : 17.2% des dividendes brutes. [Source](https://www.economie.gouv.fr/particuliers/prelevement-forfaitaire-unique-pfu)`
  },
  dividendesPFU: {
    title: "Prélèvement Forfaitaire Unique sur dividendes",
    content: `12.8% des dividendes brutes. [Source](https://www.economie.gouv.fr/particuliers/prelevement-forfaitaire-unique-pfu)`
  },
  dividendesNetsPFU: {
    title: "Dividendes nets (après IR)",
    content: `Représente le montant perçu par le freelance après les impôts car le PFU (Prélèvement Forfaitaire Unique) ou Flat-Tax est *libératoire* sur l'IR. [Source](https://www.economie.gouv.fr/particuliers/prelevement-forfaitaire-unique-pfu)`
  },
  pourcentagePrelevements: {
    title: "Pourcentage de prélèvements",
    content: `Le pourcentage de prélèvement repose sur le revenu brut.
        Exemple : 100K de CA, 10K de charges, 5K reste en société, 30K de prélèvements (impôt sur le revenu et cotisations sociales).
        \`100 - 10 - 5 = 85K\` de revenu brut perso.
        \`85 - 30 = 55K\` de revenu net perso.
        Taux de prélèvement : \`30 / 85 * 100 = 35,29%\``
  }
};
