import AddOnOption from "@components/AddOnOption/AddOnOption";
import { PickAddOnProps } from "@lib/types";
import { useState } from "react";

const FormPickAddOn = (props: PickAddOnProps) => {
  const [formData, setFormData] = useState(props);

  return (
    <div>
      <div className="text-denim font-bold text-h4 md:text-h3">
        Pick add-ons
      </div>
      <div className="text-grey">
        Add-ons help enhance your gaming experience.
      </div>

      <div className="py-2">
        <AddOnOption
          checked={formData.online}
          id="online"
          title="Online service"
          subtitle="Access to multiplayer games"
          price={1}
          handleClick={(id, value) =>
            setFormData({ ...formData, online: id === "online" && value })
          }
        />
      </div>

      <div className="py-2">
        <AddOnOption
          checked={formData.storage}
          id="storage"
          title="Larger storage"
          subtitle="Extra 1TB of cloud save"
          price={2}
          handleClick={(id, value) =>
            setFormData({ ...formData, storage: id === "storage" && value })
          }
        />
      </div>

      <div className="py-2">
        <AddOnOption
          checked={formData.profile}
          id="profile"
          title="Customizable profile"
          subtitle="Custom theme on your profile"
          price={2}
          handleClick={(id, value) =>
            setFormData({ ...formData, profile: id === "profile" && value })
          }
        />
      </div>
    </div>
  );
};

export default FormPickAddOn;
