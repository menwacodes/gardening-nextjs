import {AccessControl} from "accesscontrol";

let grantsObject = {
    admin: {
        adminRoute: {
            "read:any": ["*"]
        }
    }
};

const roles = new AccessControl(grantsObject);

export default roles;