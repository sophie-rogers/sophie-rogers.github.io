import React from "react";

interface ListItem {
  name: string;
  logo?: string | null;
}

interface ListProps {
  list: ListItem[];
}

const List: React.FC<ListProps> = ({ list }) => {
  return (
    <div className="grid grid-cols-3 gap-2 text-sm mt-5">
      {list &&
        list.map((item, index) => (
          <div key={index} className="flex flex-row mb-3 items-center">
            {item.logo && (
              <img
                src={item.logo}
                alt={item.name}
                className="h-5 w-5 ml-3 mr-4"
              />
            )}
            <code className="text-yellow_vs font-mono">{item.name}</code>
          </div>
        ))}
    </div>
  );
};

export default List;