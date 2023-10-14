
"use client"
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { toggleDrawer } from '@/redux/features/drawerSlice'
import { FUNNEL_ICON } from '@/assets/icons'

export default function DrawerButton() {
   const dispatch = useDispatch<AppDispatch>();
   const onClickDrawerButton = (): void => { dispatch(toggleDrawer()) }

   return (
      <button
         type="button"
         className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 lg:hidden"
         data-te-offcanvas-toggle
         data-te-target="#offcanvasBottom"
         aria-controls="offcanvasBottom"
         onClick={onClickDrawerButton}
      >
         <span className="sr-only">Open main menu</span>
         {FUNNEL_ICON}
      </button>
   )
}