"use client"
import { useForm, ValidationError } from "@formspree/react";
import { TypographyBodyBold, TypographyBodyRegular, typographyBodyRegularClassNames } from "./typography";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const contactInputClassName = cn(typographyBodyRegularClassNames, `placeholder:text-gray w-full rounded-none border-dark p-[10px]`)

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xdoqyjyy");
    if (state.succeeded) return (
        <p>Thanks</p>
    )
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] xl:pl-[79px] xl:border-l xl:border-l-light-gray -order-1 xl:order-1">
            <TypographyBodyRegular className="w-full">Compártenos tus datos para que podamos ponernos en contacto contigo.</TypographyBodyRegular>
            <Input name="name" className={cn(contactInputClassName)} placeholder="Nombres y Apellidos" />
            <div className="flex gap-4">
                <Input name="email" className={cn(contactInputClassName)} placeholder="Correo electrónico" />
                <Input name="telephone" className={cn(contactInputClassName)} placeholder="Teléfono" />
            </div>
            <label
                htmlFor="hasOrganization"
                className="flex items-center gap-[6px]  text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            ><Checkbox id="hasOrganization" className="rounded-none" />
                <TypographyBodyRegular>Pertenezco a una organización</TypographyBodyRegular>
            </label>
            <Textarea name="message" className={cn(contactInputClassName, "w-full h-[224px]")} rows={5} placeholder="Mensaje" />
            <Button className="mt-[10px]" variant="primary" size="free" type="submit" ><TypographyBodyBold>Enviar mensaje</TypographyBodyBold></Button>
        </form>
    )
}