window.SIDEBAR_ITEMS = {"enum":[["DwarfFileType","The “type” of file with DWARF debugging information. This determines, among other things, which files DWARF sections should be loaded from."],["Format","Whether the format of a compilation unit is 32- or 64-bit."],["RunTimeEndian","Byte order that is selectable at runtime."],["SectionId","An identifier for a DWARF section."],["UnitSectionOffset","An offset into the `.debug_info` or `.debug_types` sections."]],"mod":[["constants","Constant definitions."],["leb128","Read and write DWARF’s “Little Endian Base 128” (LEB128) variable length integer encoding."],["read","Read DWARF debugging information."]],"struct":[["AArch64","ARM 64-bit (AArch64) architecture specific definitions."],["Arm","ARM architecture specific definitions."],["BigEndian","Big endian byte order."],["DebugAbbrevOffset","An offset into the `.debug_abbrev` section."],["DebugAddrBase","An offset to a set of entries in the `.debug_addr` section."],["DebugAddrIndex","An index into a set of addresses in the `.debug_addr` section."],["DebugArangesOffset","An offset into the `.debug_aranges` section."],["DebugFrameOffset","An offset into the `.debug_frame` section."],["DebugInfoOffset","An offset into the `.debug_info` section."],["DebugLineOffset","An offset into the `.debug_line` section."],["DebugLineStrOffset","An offset into the `.debug_line_str` section."],["DebugLocListsBase","An offset to a set of location list offsets in the `.debug_loclists` section."],["DebugLocListsIndex","An index into a set of location list offsets in the `.debug_loclists` section."],["DebugMacinfoOffset","An offset into the `.debug_macinfo` section."],["DebugMacroOffset","An offset into the `.debug_macro` section."],["DebugRngListsBase","An offset to a set of range list offsets in the `.debug_rnglists` section."],["DebugRngListsIndex","An index into a set of range list offsets in the `.debug_rnglists` section."],["DebugStrOffset","An offset into the `.debug_str` section."],["DebugStrOffsetsBase","An offset to a set of entries in the `.debug_str_offsets` section."],["DebugStrOffsetsIndex","An index into a set of entries in the `.debug_str_offsets` section."],["DebugTypeSignature","A type signature as used in the `.debug_types` section."],["DebugTypesOffset","An offset into the `.debug_types` section."],["DwoId","An optionally-provided implementation-defined compilation unit ID to enable split DWARF and linking a split compilation unit back together."],["EhFrameOffset","An offset into the `.eh_frame` section."],["Encoding","Encoding parameters that are commonly used for multiple DWARF sections."],["LineEncoding","Encoding parameters for a line number program."],["LittleEndian","Little endian byte order."],["LocationListsOffset","An offset into either the `.debug_loc` section or the `.debug_loclists` section, depending on the version of the unit the offset was contained in."],["LoongArch","LoongArch architecture specific definitions."],["RangeListsOffset","An offset into either the `.debug_ranges` section or the `.debug_rnglists` section, depending on the version of the unit the offset was contained in."],["RawRangeListsOffset","An offset into either the `.debug_ranges` section or the `.debug_rnglists` section, depending on the version of the unit the offset was contained in."],["Register","A DWARF register number."],["RiscV","RISC-V architecture specific definitions."],["X86","Intel i386 architecture specific definitions."],["X86_64","AMD64 architecture specific definitions."]],"trait":[["CloneStableDeref","An unsafe marker trait for types where clones deref to the same address. This has all the requirements of StableDeref, and additionally requires that after calling clone(), both the old and new value deref to the same address. For example, Rc and Arc implement CloneStableDeref, but Box and Vec do not."],["Endianity","A trait describing the endianity of some buffer."],["StableDeref","An unsafe marker trait for types that deref to a stable address, even when moved. For example, this is implemented by Box, Vec, Rc, Arc and String, among others. Even when a Box is moved, the underlying storage remains at a fixed location."]],"type":[["NativeEndian","The native endianity for the target platform."]]};