!function(){function e(){var e="abs avg case cast coalesce convert count current_timestamp current_user day isnull left lower month nullif replace right session_user space substring sum system_user upper user year",t="absolute action add after alter as asc at authorization begin bigint binary bit by cascade char character check checkpoint close collate column commit committed connect connection constraint contains continue create cube current current_date current_time cursor database date deallocate dec decimal declare default delete desc distinct double drop dynamic else end end-exec escape except exec execute false fetch first float for force foreign forward free from full function global goto grant group grouping having hour ignore index inner insensitive insert instead int integer intersect into is isolation key last level load local max min minute modify move name national nchar next no numeric of off on only open option order out output partial password precision prepare primary prior privileges procedure public read real references relative repeatable restrict return returns revoke rollback rollup rows rule schema scroll second section select sequence serializable set size smallint static statistics table temp temporary then time timestamp to top transaction translation trigger true truncate uncommitted union unique update values varchar varying view when where with work",r="all and any between cross in join like not null or outer some";this.regexList=[{regex:/--(.*)$/gm,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.multiLineSingleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(e),"gmi"),css:"color2"},{regex:new RegExp(this.getKeywords(r),"gmi"),css:"color1"},{regex:new RegExp(this.getKeywords(t),"gmi"),css:"keyword"}]}"undefined"!=typeof require?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null,e.prototype=new SyntaxHighlighter.Highlighter,e.aliases=["sql"],SyntaxHighlighter.brushes.Sql=e,"undefined"!=typeof exports?exports.Brush=e:null}();