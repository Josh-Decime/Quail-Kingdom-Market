import tableA from "./TableA.js"; // ✅ Import default from TableA
import tableB from "./TableB.js";
import tableC from "./TableC.js";
import tableD from "./TableD.js";
import tableE from "./TableE.js";
import blackMarketTableA from "./BlackTableA.js";

export const AllTables = {
    A: tableA,
    B: tableB,
    C: tableC,
    D: tableD,
    E: tableE,
    BMA: blackMarketTableA,
};

export default AllTables; // ✅ Add default export
