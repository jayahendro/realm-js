////////////////////////////////////////////////////////////////////////////
//
// Copyright 2022 Realm Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

import * as internal from "./internal";

const GlobalDate = Date;
type GlobalDate = Date;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Types {
  export type Bool = boolean;
  export type String = string;
  export type Int = number;
  export type Float = number;
  export type Double = number;

  export import Decimal128 = internal.BSON.Decimal128;
  export import ObjectId = internal.BSON.ObjectId;
  export import UUID = internal.BSON.UUID;
  export import Counter = internal.Counter;

  export type Date = GlobalDate;
  export const Date = GlobalDate;

  export type Data = ArrayBuffer;
  export const Data = ArrayBuffer;

  export import List = internal.List;
  export import Set = internal.RealmSet;
  export import Dictionary = internal.Dictionary;

  export type Mixed = unknown;
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars -- We don't use the `LinkingPropertyName` at runtime */
  export type LinkingObjects<ObjectTypeT, LinkingPropertyName> = internal.Results<ObjectTypeT>;
  export const LinkingObjects = internal.Results;
}
