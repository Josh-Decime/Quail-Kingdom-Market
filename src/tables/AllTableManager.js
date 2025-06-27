import tableA from "./TableA.js"; // ✅ Import default from TableA
import tableB from "./TableB.js";
import tableC from "./TableC.js";
import tableD from "./TableD.js";
import tableE from "./TableE.js";
import blackMarketTableA from "./BlackTableA.js";
import blackMarketTableB from "./BlackTableB.js";

export const AllTables = {
    A: tableA,
    B: tableB,
    C: tableC,
    D: tableD,
    E: tableE,
    BMA: blackMarketTableA,
    BMB: blackMarketTableB,
};

export default AllTables; // ✅ Add default export
