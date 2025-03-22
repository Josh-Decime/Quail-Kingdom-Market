import tableA from "./TableA.js"; // ✅ Import default from TableA
import tableB from "./TableB.js";
import tableC from "./TableC.js";

export const AllTables = {
    A: tableA, // ✅ Assign Table A correctly
    // FIXME the old table was built as plain objects instead of being instances of the MagicItem model. I can either convert table B to be plain objects & have it working straight away, or fix table A & debug the code to reference it as a model instance object
    B: tableB,
    C: tableC,
};

export default AllTables; // ✅ Add default export
