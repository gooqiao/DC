interface ConfigOptions {
  unknownField?: "include" | "exclude"; // 未声明字段的处理方式
}

interface ApiMap {
  [key: string]: StringKey | MapOptions | ApiMap;
}

type StringKey = string | string[];

interface MapOptions {
  _key?: string;
  _formatter?: <Data = unknown>(data: Data, source?: Model) => unknown;
  _includeKeys?: string[];
  _excludeKeys?: string[];
}

type Model = unknown;
