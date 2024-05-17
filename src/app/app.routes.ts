import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { visitAll } from '@angular/compiler';
import { ViewAllBooksComponent } from './page/view-all-books/view-all-books.component';
import { RegisterComponent } from './page/register/register.component';
import { ViewAllUsersComponent } from './page/view-all-users/view-all-users.component';
import { AddBookComponent } from './page/add-book/add-book.component';
import { BorrowBookComponent } from './page/borrow-book/borrow-book.component';
import { ViewAllTransactionsComponent } from './page/view-all-transactions/view-all-transactions.component';

export const routes: Routes = [

    {
        path: "login",
        component: LoginComponent
    },

    {
        path: "view-all-books",
        component: ViewAllBooksComponent
    },

    {
        path: "sign-up",
        component: RegisterComponent
    },

    {
        path: "view-all-users",
        component: ViewAllUsersComponent
    },

    {
        path: "add-book",
        component: AddBookComponent
    },

    {
        path: "borrow-book",
        component: BorrowBookComponent
    },

    {
        path: "view-all-transactions",
        component: ViewAllTransactionsComponent
    },

    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    }
];
