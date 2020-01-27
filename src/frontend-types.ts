import { PartialObjects } from "./graphql-zeus";

export type FrontendTypes = {
    ["TemplateComponent"]: Omit<PartialObjects["TemplateComponent"], "feature"> & {
        feature: PartialObjects["Feature"]
    },
    ["Document"]: Omit<PartialObjects["Document"], "features"> & {
        features?: FrontendTypes["Features"]
    }
    ["Features"]: Omit<PartialObjects["Features"], "items"> & {
        items?: PartialObjects["Feature"][]
    }
    ["MachineDocument"]: Omit<PartialObjects["MachineDocument"], "footer" | "header" | "documents"> & {
        footer?: PartialObjects["Feature"],
        header?: PartialObjects["Feature"],
        documents: FrontendTypes["Document"][]
    },
    ["MachineTemplate"]: Omit<PartialObjects["MachineTemplate"], "template"> & {
        template: FrontendTypes["MachineDocument"]
    }
}

export type PickFromMachineTemplate = Pick<PartialObjects["MachineTemplate"], "name" | "version">
export type PickFromComponents = Pick<PartialObjects["TemplateComponent"], "name" | "type">
