import { inject, NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { UserService } from "./core/services/user.service";
import { map } from "rxjs/operators";
import { ProfileComponent } from "./features/profile/profile.component";

const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./features/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "orders",
    loadComponent: () =>
      import("./features/orders/orders.component").then((m) => m.OrdersComponent),
  },
  {
    path: "parcels",
    loadComponent: () =>
      import("./features/parcels/parcels.component").then((m) => m.ParcelsComponent),
  },
  {
    path: "payments",
    loadComponent: () =>
      import("./features/payments/payments.component").then((m) => m.PaymentsComponent),
  },
  {
    path: "periodic",
    loadComponent: () =>
      import("./features/periodic/periodic.component").then((m) => m.TableDynamicArrayDataExample),
  },
  {
    path: "shipments",
    loadComponent: () =>
      import("./features/shipments/shipments.component").then((m) => m.ShipmentsComponent),
  },
  {
    path: "statements",
    loadComponent: () =>
      import("./features/statements/statements.component").then((m) => m.StatementsComponent),
  },
  {
    path: "profile",
    loadComponent: () =>
      import("./features/profile/profile.component").then((m) => m.ProfileComponent),
  },
  {
    path: "settings",
    loadComponent: () =>
      import("./features/settings/settings.component").then((m) => m.SettingsComponent),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}