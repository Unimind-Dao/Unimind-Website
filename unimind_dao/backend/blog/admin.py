from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import BlogPost, TeamMember

class BlogPostAdmin(SummernoteModelAdmin):
    exclude = ('slug', )
    list_display = ('id', 'title', 'category', 'date_created')
    list_display_links = ('id', 'title')
    search_fields = ('title', )
    list_per_page = 25
    summernote_fields = ('content', )

admin.site.register(BlogPost, BlogPostAdmin)

class TeamMemberAdmin(SummernoteModelAdmin):
    exclude = ('slug', )
    list_display = ('name', 'nick', 'role')
    list_display_links = ('nick',)
    search_fields = ('nick', )
    list_per_page = 25

admin.site.register(TeamMember, TeamMemberAdmin)