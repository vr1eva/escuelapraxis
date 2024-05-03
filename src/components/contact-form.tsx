"use client"
import { useForm, ValidationError } from "@formspree/react";
import { TypographyBodyBold, TypographyBodyRegular, typographyBodyRegularClassNames, TypographyHighlight } from "./typography";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const contactInputClassName = cn(typographyBodyRegularClassNames, `placeholder:text-gray w-full rounded-none border-dark p-[10px]`)

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xdoqyjyy");
    return (
        <div className="xl:pl-[79px] xl:border-l xl:border-l-light-gray ">
            <TypographyBodyRegular className="w-full mt-[32px]">Compártenos tus datos para que podamos ponernos en contacto contigo.</TypographyBodyRegular>
            <form onSubmit={handleSubmit} className="mt-[32px] xl:mt-[56px] xl:shrink-0 flex flex-col gap-[16px] ">
                <Input name="name" className={cn(contactInputClassName)} placeholder="Nombres y Apellidos" />
                <div className="flex gap-4 xl:flex-row flex-col">
                    <Input name="email" className={cn(contactInputClassName)} placeholder="Correo electrónico" />
                    <Input name="telephone" className={cn(contactInputClassName)} placeholder="Teléfono" />
                </div>
                <label
                    htmlFor="hasOrganization"
                    className="flex items-center gap-[6px]  text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 order-2"
                ><Checkbox id="hasOrganization" className="rounded-none order" />
                    <TypographyBodyRegular>Pertenezco a una organización</TypographyBodyRegular>
                </label>
                <Textarea name="message" className={cn(contactInputClassName, "w-full h-[224px]")} rows={5} placeholder="Mensaje" />
                <Button className="mt-[10px] order-3" variant="primary" size="free" type="submit" ><TypographyBodyBold>Enviar mensaje</TypographyBodyBold></Button>
            </form>
            {true ? <TypographyHighlight className="font-normal block mt-[32px]">Tu mensaje ha sido enviado. Nos pondremos en contacto contigo. </TypographyHighlight> : null}
        </div>

    )
}