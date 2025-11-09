import React from "react";

// Interface for each item in the list, with an optional logo
interface ListItem {
  name: string;
  logo?: string | null;
}

// Props interface for the List component
interface ListProps {
  list: ListItem[];
}

const List: React.FC<ListProps> = ({ list }) => {
  return (
    // Grid container for list items, 3 columns with spacing
    <div className="grid grid-cols-3 gap-2 text-sm mt-5">
      {list &&
        list.map((item, index) => (
          // Each item displayed in a horizontal row with some margin
          <div key={index} className="flex flex-row mb-3 items-center">
            {/* Render logo if provided */}
            {item.logo && (
              <img
                src={item.logo}
                alt={item.name}
                className="h-5 w-5 ml-3 mr-4"
              />
            )}
            {/* Display the item name */}
            <code className="text-yellow_vs font-mono">{item.name}</code>
          </div>
        ))}
    </div>
  );
};

export default List;