import { Control } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>;

type CustomFormFieldProps = {
  name: string;
  control: Control<any>;
};

export function CustomFormField({ name, control }: CustomFormFieldProps) {
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="capitalize">{name}</FormLabel>
        <FormControl>
          <Input {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />;
}

type CustomFormSelectProps = {
  name: string;
  control: Control<any>;
  items: string[];
  labelText?: string;
};

export function CustomFormSelect({
    name,
    control,
    items,
    labelText,
  }: CustomFormSelectProps) {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="capitalize">{labelText || name}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                    <SelectTrigger>
                        <SelectValue/>
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {items.map((item)=>{
                        return <SelectItem key={item} value={item}>
                            {item}
                        </SelectItem>
                    })}
                </SelectContent>
            </Select>
            <FormMessage/>
          </FormItem>
        )}
      />
    );
  }
  