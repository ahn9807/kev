window.SIDEBAR_ITEMS = {"enum":[["CC_a","Mnemonic condition code selector (eg. `JA` / `JNBE`)"],["CC_ae","Mnemonic condition code selector (eg. `JAE` / `JNB` / `JNC`)"],["CC_b","Mnemonic condition code selector (eg. `JB` / `JC` / `JNAE`)"],["CC_be","Mnemonic condition code selector (eg. `JBE` / `JNA`)"],["CC_e","Mnemonic condition code selector (eg. `JE` / `JZ`)"],["CC_g","Mnemonic condition code selector (eg. `JG` / `JNLE`)"],["CC_ge","Mnemonic condition code selector (eg. `JGE` / `JNL`)"],["CC_l","Mnemonic condition code selector (eg. `JL` / `JNGE`)"],["CC_le","Mnemonic condition code selector (eg. `JLE` / `JNG`)"],["CC_ne","Mnemonic condition code selector (eg. `JNE` / `JNZ`)"],["CC_np","Mnemonic condition code selector (eg. `JNP` / `JPO`)"],["CC_p","Mnemonic condition code selector (eg. `JP` / `JPE`)"],["Code","x86 instruction code"],["CodeSize","The code size (16/32/64) that was used when an instruction was decoded"],["DecoderError","Decoder error"],["DecoratorKind","Decorator"],["EncodingKind","Instruction encoding"],["FormatterTextKind","Formatter text kind"],["MemorySize","Size of a memory reference"],["MemorySizeOptions","Memory size options used by the formatters"],["Mnemonic","Mnemonic"],["NumberBase","Number base"],["NumberKind","Number kind"],["OpKind","Instruction operand kind"],["PrefixKind","Prefix"],["Register","A register"],["RoundingControl","Rounding control"],["SymResString","Contains a `&'a str` or a `String`"],["SymResTextInfo","Contains one or more `SymResTextPart`s (text and color)"],["TupleType","Tuple type (EVEX/MVEX) which can be used to get the disp8 scale factor `N`"]],"struct":[["ConstantOffsets","Contains the offsets of the displacement and immediate. Call `Decoder::get_constant_offsets()` or `Encoder::get_constant_offsets()` to get the offsets of the constants after the instruction has been decoded/encoded."],["Decoder","Decodes 16/32/64-bit x86 instructions"],["DecoderOptions","Decoder options"],["FormatMnemonicOptions","Format mnemonic options"],["FormatterOperandOptions","Operand options"],["FormatterOptions","Formatter options"],["IcedError","iced error"],["Instruction","A 16/32/64-bit x86 instruction. Created by `Decoder`, by `CodeAssembler` or by `Instruction::with*()` methods."],["IntelFormatter","Intel formatter (same as Intel XED)"],["NumberFormattingOptions","Gets initialized with the default options and can be overridden by a `FormatterOptionsProvider`"],["SymResTextPart","Contains text and colors"],["SymbolFlags","Symbol flags"],["SymbolResult","Created by a `SymbolResolver`"]],"trait":[["Formatter","Formats instructions"],["FormatterOptionsProvider","Can override options used by a `Formatter`"],["FormatterOutput","Used by a `Formatter` to write all text. `String` also implements this trait."],["SymbolResolver","Used by a `Formatter` to resolve symbols"]]};