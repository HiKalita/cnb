import { Given, DataTable, Then, When } from '@cucumber/cucumber';
// import { actorCalled, actorInTheSpotlight, Answerable, Duration, Interaction } from '@serenity-js/core';
import { Enter, Navigate, Press, Target, Website, TakeScreenshot, Text } from '@serenity-js/protractor';
import { Ensure, equals, containAtLeastOneItemThat, matches } from '@serenity-js/assertions';
import { by, protractor } from 'protractor';
// import { TakeScreenshot } from '@serenity-js/protractor';
// import {Text} from '@serenity-js/protractor/lib/screenplay/questions/text';
// import { table } from 'node:console';

Given('{actor} wants to use the application', actor =>
    actor.attemptsTo(
        Navigate.to('https://todo-app.serenity-js.org/#/'),
        Ensure.that(Website.title(), equals('Serenity/JS TodoApp'))
    ));

class TodoList {
    static newTodoInput = () =>
    Target.the('new todo input').located(by.css('.new-todo'))

    static items = () =>
    Target.all('recorded items').located(by.css('.todo-list .todo'))
    }

When('{pronoun} records {string}', (actor, itemName: string) =>
    actor.attemptsTo(
        Enter.theValue(itemName).into(TodoList.newTodoInput()),
        Press.the(protractor.Key.ENTER).in(TodoList.newTodoInput()),
        TakeScreenshot.of('todo list')
    ));

Then('{pronoun} list should contain',  function (actor, table: DataTable) {
        return actor.attemptsTo(
            Ensure.that(Text.ofAll(TodoList.items()), equals(
                table.hashes().map(item => item.item_name)
            ))
        );
        return 'pending';
    });

