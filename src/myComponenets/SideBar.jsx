import { Sidebar,SidebarProvider,SidebarHeader,SidebarContent,SidebarGroup,SidebarGroupLabel,SidebarGroupContent ,SidebarMenu,SidebarMenuItem,SidebarMenuButton,SidebarTrigger} from "@/components/ui/sidebar"
import { FolderGit2,Hourglass,Play } from "lucide-react"
const projects=[
    {
        "icon":<Hourglass/>,
        "text":"soon"
    }
]


function SideBar({children}) {
  return (
    <div>
      <SidebarProvider className={"bg-(--background) text-(--text)"}>
            <Sidebar>
                <SidebarHeader className={'text-(--primary) text-2xl shadow  '}>
                    Lassaad Mansour
                </SidebarHeader>
                <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>
                               <div className=" flex items-center gap-1">
                                <Play/> <span>get started</span>
                               </div>
                            </SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <div className="flex items-center gap-1">
                                                <FolderGit2/> <span>projetcs</span>
                                            </div>
                                           
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                </SidebarContent>

            </Sidebar>
            <SidebarTrigger/>
            <main className="w-full">
                {children}
            </main>


      </SidebarProvider>
    </div>
  )
}

export default SideBar
